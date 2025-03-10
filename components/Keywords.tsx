interface KeywordsProps {
  keywords: string[];
}

export default function Keywords({ keywords }: KeywordsProps) {
  return (
    <ul class="mb-2 flex flex-wrap items-start">
      {keywords.map((keyword) => (
        <li class="mr-1 mb-1 px-1 py-0.5 text-xs bg-slate-200 text-slate-600 rounded">
          {keyword}
        </li>
      ))}
    </ul>
  );
}
