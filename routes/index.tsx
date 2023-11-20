export default function Home() {
  return (
    <div class="bg-gray-100 dark:bg-black h-screen min-h-full">
      <div class="p-4 mx-auto max-w-screen-md">
        <div class="ml-2 flex lg:ml-0">
          <a href="/">
            <div
              class="h-8 w-8 rounded-md"
              style={{ backgroundColor: "#40E0D0" }}
            >
            </div>
          </a>
          <h1 class="ml-2 mt-1 dark:text-white">Turquoze</h1>
        </div>
        <div class="pt-24 pb-12">
          <p class="my-6 dark:text-white">
            Welcome to Turquoze, a headless e-commerce project. (Currently in
            development)
          </p>
          <a
            class="dark:text-white hover:text-blue-600"
            href="https://github.com/turquoze"
          >
            Check our GitHub org for updates
          </a>
        </div>
      </div>
    </div>
  );
}
