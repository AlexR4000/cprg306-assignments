// app/page.js

import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <ul>
        <li>
        <Link href= "/week-2" className="text-cyan-600 underline hover:text-cyan-300">Go to Week 2 Page</Link>
        </li>
        <li>
        <Link href= "/week-3" className="text-cyan-600 underline hover:text-cyan-300">Go to Week 3 Page</Link>
        </li>
      </ul>
      
      
    </main>
  );
}
