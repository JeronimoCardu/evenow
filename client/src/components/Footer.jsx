export default function Footer() {
  return (
    <footer className="mt-8 bg-gray-800 p-4 text-center text-white">
      <p>
        &copy; {new Date().getFullYear()} Evenow. All rights reserved.
      </p>
    </footer>
  );
}
