"use server";

export type InquiryValues = {
  parent: string;
  email: string;
  phone: string;
  child: string;
  grade: string;
  moving: string;
  notes: string;
};

export type InquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"parent" | "email", string>>;
  values?: InquiryValues;
};

const TO = process.env.INQUIRY_TO ?? "support@abrightlightedu.com";
// Sending from a verified custom domain is strongly recommended. Until one is
// set up, Resend's shared onboarding sender works for testing.
const FROM =
  process.env.RESEND_FROM ??
  "Jacksonville Jewish Learning Pod <support@abrightlightedu.com>";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function read(formData: FormData, key: keyof InquiryValues): string {
  return String(formData.get(key) ?? "").trim();
}

export async function sendInquiry(
  _prevState: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const values: InquiryValues = {
    parent: read(formData, "parent"),
    email: read(formData, "email"),
    phone: read(formData, "phone"),
    child: read(formData, "child"),
    grade: read(formData, "grade"),
    moving: read(formData, "moving"),
    notes: read(formData, "notes"),
  };

  // Server-side validation (the form also enforces these client-side).
  const errors: InquiryState["errors"] = {};
  if (!values.parent) errors.parent = "Please tell us your name.";
  if (!EMAIL_RE.test(values.email))
    errors.email = "Please enter a valid email.";
  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send inquiry email.");
    return {
      status: "error",
      message:
        "Email isn't fully set up yet. Please email support@abrightlightedu.com directly and we'll get right back to you.",
      values,
    };
  }

  const text = [
    `Parent name: ${values.parent}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "—"}`,
    `Child: ${values.child || "—"}`,
    `Grade in 2026–27: ${values.grade || "—"}`,
    `Moving to Jacksonville? ${values.moving || "—"}`,
    "",
    "Notes:",
    values.notes || "—",
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: values.email,
        subject: `Pod inquiry — ${values.parent}`,
        text,
      }),
      // Email sending must never be served from cache.
      cache: "no-store",
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error(`Resend API error ${res.status}: ${detail}`);
      return {
        status: "error",
        message:
          "Something went wrong sending your inquiry. Please email support@abrightlightedu.com directly.",
        values,
      };
    }
  } catch (err) {
    console.error("Failed to reach Resend:", err);
    return {
      status: "error",
      message:
        "Something went wrong sending your inquiry. Please email support@abrightlightedu.com directly.",
      values,
    };
  }

  return {
    status: "success",
    message:
      "Thank you — your inquiry is on its way. We'll be in touch within 48 hours.",
  };
}
