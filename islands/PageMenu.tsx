import { asset } from "$fresh/runtime.ts";

export default function PageMenu() {
  const handleDownload = (event: MouseEvent) => {
    event.preventDefault();
    window.open(asset("/resume.pdf"), "_blank");
  }

  const handlePrint = (event: MouseEvent) => {
    event.preventDefault();
    window.print();
  }

  const handleSend = (event: MouseEvent) => {
    event.preventDefault();

    const subject = "Check out Andrew's resume!"
    const body = new URL("#email-link", document.baseURI).href

    window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
  }

  return (
    <menu class="mx-auto flex justify-center print:hidden">
      <div class="flex justify-center space-x-4 px-4 py-2 bg-slate-100 rounded-full">
        <a
          href="#download"
          alt="email link"
          onClick={handleDownload}
          class="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            class="w-5 h-5 fill-current text-slate-400 hover:text-slate-800"
          >
            <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
            <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
          </svg>
        </a>

        <a
          href="#print"
          alt="print page"
          onClick={handlePrint}
          class="cursor-pointer"
        >
          <svg  
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            class="w-5 h-5 fill-current text-slate-400 hover:text-slate-800"
          >
            <path fill-rule="evenodd" d="M5 2.75C5 1.784 5.784 1 6.75 1h6.5c.966 0 1.75.784 1.75 1.75v3.552c.377.046.752.097 1.126.153A2.212 2.212 0 0 1 18 8.653v4.097A2.25 2.25 0 0 1 15.75 15h-.241l.305 1.984A1.75 1.75 0 0 1 14.084 19H5.915a1.75 1.75 0 0 1-1.73-2.016L4.492 15H4.25A2.25 2.25 0 0 1 2 12.75V8.653c0-1.082.775-2.034 1.874-2.198.374-.056.75-.107 1.127-.153L5 6.25v-3.5Zm8.5 3.397a41.533 41.533 0 0 0-7 0V2.75a.25.25 0 0 1 .25-.25h6.5a.25.25 0 0 1 .25.25v3.397ZM6.608 12.5a.25.25 0 0 0-.247.212l-.693 4.5a.25.25 0 0 0 .247.288h8.17a.25.25 0 0 0 .246-.288l-.692-4.5a.25.25 0 0 0-.247-.212H6.608Z" clip-rule="evenodd" />
          </svg>
        </a>

        <a
          href="#email"
          alt="email link"
          onClick={handleSend}
          class="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            class="w-5 h-5 fill-current text-slate-400 hover:text-slate-800"
          >
            <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
            <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
          </svg>
        </a>
      </div>
    </menu>
  );
}
