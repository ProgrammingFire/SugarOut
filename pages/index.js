import PopupOffer from "components/popup-offer";

export default function Index() {
  return (
    <div>
      <PopupOffer />
      <div class="flex flex-col hero mb-32 items-center text-white flex-wrap-reverse">
        <div class="p-8 mb-8 rounded-md">
          {" "}
          <img src="https://i.imgur.com/LwF0Tjg.png" class="rounded "></img>
        </div>

        <div class="w-3/4">
          <h1 class="text-4xl text-center mb-3 font-bold">
            DIABETES MANAGEMENT LEVELED UP
          </h1>
          <p class="text-gray-300 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            repudiandae et impedit quo consectetur est provident porro fugiat
            officiis quae dolores optio quia nulla placeat, officia recusandae
            iusto quod pariatur similique minus odit ipsam aperiam! Odio
            delectus sit perferendis, nisi necessitatibus eaque autem nihil ex,
            quia ducimus beatae atque pariatur, inventore eos similique est in!
            Neque veniam iure porro quaerat!
          </p>
        </div>
      </div>
    </div>
  );
}
