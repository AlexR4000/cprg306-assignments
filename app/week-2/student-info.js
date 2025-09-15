
import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <h1>Student Info</h1>
      <p>Name: Alex R.</p>
      <p>
        GitHub:{" "}
        <Link
          href="https://github.com/AlexR4000/cprg306-assignments.git"
          target="_blank"
          className="text-cyan-600 underline hover:text-cyan-300"
        >
          My GitHub Repository
        </Link>
      </p>
    </div>
  );
}
