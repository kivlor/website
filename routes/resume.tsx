import { asset } from "$fresh/runtime.ts";

import Keywords from "../components/Keywords.tsx";
import PageMenu from "../islands/PageMenu.tsx";
import { resume } from "../library/resume.ts";

export default function Resume() {
  const { basics, work, skills } = resume;

  return (
    <div class="mx-1 md:mx-auto mt-8 print:mt-0 p-6 print:p-0 md:max-w-3xl bg-white rounded-t-lg print:rounded-none shadow-lg print:shadow-none animate-slide-up">
      <header class="mb-4">
        <div class="flex justify-between">
          <div>
            <h1 class="mb-1 font-bold font-sans text-2xl">
              {basics.name}
            </h1>
            
            <h2 class="font-mono text-sm text-slate-600 tracking-tight">
              {basics.label}
            </h2>

            <p class="mb-4 font-mono text-xs text-slate-600 tracking-tight">
              {basics.location.city} {basics.location.region},{' '}
              {basics.location.countryCode}
            </p>

            <nav>
              <p class="font-mono text-xs text-blue-600">
                <a href={`mailto:${basics.email}`} alt="email">
                  {basics.email}
                </a>
                <span class="mx-1 text-slate-600">
                  /
                </span>
                <a href="/" alt="home">
                  {basics.url}
                </a>
              </p>
            </nav>
          </div>

          <figure class="w-20 md:w-28 h-20 md:h-28">
            <img src={asset("/me-and-flash.jpg")} alt={basics.name} class="rounded-lg" />
          </figure>
        </div>
      </header>

      <section class="mb-4 break-inside-avoid">
        <h3 class="mb-2 font-bold font-sans text-xl">
          About
        </h3>
        <p class="font-mono text-sm text-slate-600 leading-5 tracking-tight">
          {basics.summary}
        </p>
      </section>

      <section class="mb-4 break-inside-avoid">
        <h3 class="mb-2 font-bold font-sans text-xl">
          Experience
        </h3>

        {work.map((job) => (
          <div class="mb-4">
            <h4 class="font-bold font-sans text-lg">
              {job.name}
            </h4>

            <p class="mb-2 font-sans text-base">
              {job.position} <span class="block md:float-end font-light text-sm text-slate-600">{job.startDate}{job.endDate && ` to ${job.endDate}`}</span>
            </p>

            <p class="mb-2 font-mono text-sm text-slate-600 leading-5 tracking-tight">
              {job.summary}
            </p>

            <Keywords keywords={job.highlights} />
          </div>
        ))}
      </section>

      <section class="mb-4 break-inside-avoid">
        <h3 class="mb-2 font-bold font-sans text-xl">Skills</h3>

        {skills.map((skill) => (
          <div class="mb-4">
            <h4 class="mb-2 font-sans text-base">
              {skill.name}:
            </h4>

            <Keywords keywords={skill.keywords} />
          </div>
        ))}
      </section>
      
      <div class="py-4">
        <PageMenu />
      </div>
    </div>
  );
}
