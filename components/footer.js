export default function Footer() {
  return (
    <footer class="bg-footer-dark flex-col py-20 text-xl flex items-center text-white w-full">
      <h1>
        Find An Issue?{" "}
        <a
          href="https://github.com/programmingfire/website"
          target="_blank"
          class="text-blue-300 hover:underline"
        >
          Issue It On Github
        </a>
      </h1>
      <h1 class="mt-6">Copyright &copy; 2023 SugarOut</h1>
      <h1 class="mt-6">
        Created By{" "}
        <a
          className="text-blue-300 hover:underline"
          target="_blank"
          href="https://github.com/programmingfire"
        >
          <span>Nouman Rahman</span>
        </a>
      </h1>
    </footer>
  );
}
