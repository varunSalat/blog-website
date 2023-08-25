import Sbtn from "./Sbtn";

const List = () => {
  return (
    <article className="flex flex-col gap-4 justify-start">
      <div className="flex flex-row items-center justify-start gap-2">
        <img
          src="./profile.webp"
          alt="profile"
          className="h-8 rounded-full object-cover"
        />
        <span className="font-medium text-md">Hardik Sadhu</span>
        <span>•</span>
        <time className="font-medium text-sm text-gray-500">July 4,2023</time>
      </div>
      <div className="xl:grid grid-cols-10 flex flex-col-reverse sm:gap-6 md:gap-8 items-start justify-start">
        <div className="col-span-7 flex flex-col gap-6">
          <div>
            <h1 className="font-bold text-lg md:text-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              modi suscipit pariatur
            </h1>
          </div>
          <div>
            <p className="text-base font-light text-gray-500 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              repellendus quo illo dolor quam provident veritatis minus odio.
              Voluptatum minus animi velit quam necessitatibus. Reprehenderit
              dolor vero suscipit dicta corporis. Fuga facere ex voluptas veniam
              earum adipisci facilis consectetur odit dolores explicabo
              reprehenderit possimus similique libero a, ducimus nobis
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap items-center justify-start gap-4">
            <Sbtn title="Science" />
            <Sbtn title="Science" />
            <Sbtn title="Science" />
          </div>
        </div>
        <div className="col-span-3">
          <img
            src="./ast.jpg"
            alt="Article Image"
            className="rounded-2xl object-cover aspect-[3/2] border-2 border-black/10"
          />
        </div>
      </div>
    </article>
  );
};

export default List;
