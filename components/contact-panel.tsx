'use client';

import { FormEvent, useState } from 'react';
import { DemoCtaButton } from '@/components/demo-cta-button';

type FormState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

const DEFAULT_VALUES = {
  name: '',
  email: '',
  organisation: '',
  message: '',
};

export function ContactPanel() {
  const [values, setValues] = useState(DEFAULT_VALUES);
  const [formState, setFormState] = useState<FormState>({ status: 'idle', message: '' });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState({ status: 'loading', message: 'Sending your request...' });

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed');
      }

      setValues(DEFAULT_VALUES);
      setFormState({
        status: 'success',
        message: 'Request received. Our team will contact you shortly.',
      });
    } catch {
      setFormState({
        status: 'error',
        message: 'Submission failed. Please retry or use the Request a demo email button.',
      });
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="card-surface rounded-3xl p-6 sm:p-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-100">Contact us</h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Share your context and priorities, and we will tailor a platform walkthrough around your lifecycle and
          compliance requirements.
        </p>
        <DemoCtaButton className="mt-6" />
      </section>

      <section className="card-surface rounded-3xl p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-slate-100">Send details directly</h3>
        <form onSubmit={onSubmit} className="mt-5 space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              value={values.name}
              onChange={(event) => setValues((old) => ({ ...old, name: event.target.value }))}
              className="w-full rounded-lg border border-white/15 bg-black/25 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-300">
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={values.email}
              onChange={(event) => setValues((old) => ({ ...old, email: event.target.value }))}
              className="w-full rounded-lg border border-white/15 bg-black/25 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>
          <div>
            <label htmlFor="organisation" className="mb-1 block text-sm font-medium text-slate-300">
              Organisation
            </label>
            <input
              id="organisation"
              name="organisation"
              value={values.organisation}
              onChange={(event) => setValues((old) => ({ ...old, organisation: event.target.value }))}
              className="w-full rounded-lg border border-white/15 bg-black/25 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-300">
              Requirements
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={values.message}
              onChange={(event) => setValues((old) => ({ ...old, message: event.target.value }))}
              className="w-full rounded-lg border border-white/15 bg-black/25 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>
          <button
            type="submit"
            disabled={formState.status === 'loading'}
            className="rounded-lg border border-emerald-200/35 bg-emerald-500/15 px-4 py-2.5 text-sm font-semibold text-emerald-100 transition-colors hover:bg-emerald-500/25 disabled:opacity-70"
          >
            {formState.status === 'loading' ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {formState.status !== 'idle' ? (
          <p
            role="status"
            className={`mt-4 text-sm ${
              formState.status === 'success'
                ? 'text-emerald-200'
                : formState.status === 'error'
                  ? 'text-rose-300'
                  : 'text-slate-300'
            }`}
          >
            {formState.message}
          </p>
        ) : null}
      </section>
    </div>
  );
}
