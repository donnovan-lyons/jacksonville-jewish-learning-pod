"use client";

import { useActionState } from "react";
import { sendInquiry, type InquiryState } from "@/app/enroll/actions";

const initialState: InquiryState = { status: "idle", message: "" };

const inputCls =
  "w-full rounded-sm border border-border bg-paper px-4 py-3 text-base text-ink focus:border-ochre focus:outline-none focus:ring-1 focus:ring-ochre aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-sm text-destructive">{error}</span>
      )}
    </label>
  );
}

export function EnrollForm() {
  const [state, formAction, pending] = useActionState(
    sendInquiry,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-sm border border-ochre/60 bg-paper px-6 py-8">
        <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-ochre">
          Inquiry sent
        </div>
        <p className="font-display text-2xl text-ink">{state.message}</p>
        <p className="mt-3 text-sm text-muted-foreground">
          A copy went straight to Felicia. If you don&apos;t hear back, email{" "}
          <a
            className="text-ink underline decoration-ochre underline-offset-4"
            href="mailto:support@abrightlightedu.com"
          >
            support@abrightlightedu.com
          </a>
          .
        </p>
      </div>
    );
  }

  const v = state.values;

  return (
    <form action={formAction} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Parent name" error={state.errors?.parent}>
          <input
            required
            name="parent"
            defaultValue={v?.parent}
            aria-invalid={Boolean(state.errors?.parent)}
            className={inputCls}
          />
        </Field>
        <Field label="Email" error={state.errors?.email}>
          <input
            required
            type="email"
            name="email"
            defaultValue={v?.email}
            aria-invalid={Boolean(state.errors?.email)}
            className={inputCls}
          />
        </Field>
        <Field label="Phone">
          <input name="phone" defaultValue={v?.phone} className={inputCls} />
        </Field>
        <Field label="Child's name">
          <input name="child" defaultValue={v?.child} className={inputCls} />
        </Field>
        <Field label="Grade in 2026–27">
          <input
            name="grade"
            placeholder="6, 7, 8…"
            defaultValue={v?.grade}
            className={inputCls}
          />
        </Field>
        <Field label="Moving to Jacksonville?">
          <input
            name="moving"
            placeholder="Yes / No / Considering"
            defaultValue={v?.moving}
            className={inputCls}
          />
        </Field>
      </div>
      <Field label="Anything you'd like us to know">
        <textarea
          name="notes"
          rows={5}
          defaultValue={v?.notes}
          className={inputCls}
        />
      </Field>

      {state.status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          {state.message}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send inquiry →"}
        </button>
        <span className="text-sm text-muted-foreground">
          Or email{" "}
          <a
            className="text-ink underline decoration-ochre underline-offset-4"
            href="mailto:support@abrightlightedu.com"
          >
            support@abrightlightedu.com
          </a>
        </span>
      </div>
    </form>
  );
}
