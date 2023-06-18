import HeaderMenu from "components/menu";

export default function About() {
  return (
    <div>
      <HeaderMenu></HeaderMenu>
      <div class="flex flex-col hero mb-32 items-center text-white flex-wrap-reverse">
        <div class="p-8 mb-8 rounded-md">
          {" "}
          <img src="https://i.imgur.com/LwF0Tjg.png" class="rounded "></img>
        </div>

        <div class="w-3/4">
          <h1 class="text-4xl text-center mb-3 font-bold">ABOUT SUGAROUT</h1>
          <p class="text-gray-300 text-center">
            Sugarout is a food product brand that provides Low Glycemic load
            food products for persons willing to manage their blood sugar
            levels. The glycemic load of a food item is an important nutritional
            parameter because it can suggest how much blood sugar level will
            rise after eating a particular amount of food. One must control his
            daily dietary glycemic load for better blood sugar control.
          </p>
        </div>
      </div>
    </div>
  );
}
