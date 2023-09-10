import Sbtn from "./Sbtn";

const List = ({
  onClick,
  title,
  summary,
  cat,
  img,
  createdAt,
  name,
  profile,
}) => {
  // Time Func
  const formatedTime = (timestamp) => {
    const options = { year: "2-digit", month: "long", day: "numeric" };
    const formattedDate = new Date(timestamp).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };
  return (
    <>
      <article className="flex flex-col gap-4 justify-start">
        <div className="flex flex-row items-center justify-start gap-2">
          <img
            src={profile}
            alt="profile"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="font-medium text-md">{name}</span>
          <span>•</span>
          <time className="font-medium text-sm text-gray-500">
            {formatedTime(createdAt)}
          </time>
        </div>
        <div className="lg:grid grid-cols-10 flex flex-col-reverse sm:gap-6 md:gap-8 items-start justify-start">
          <div className="col-span-7 flex flex-col gap-6">
            <div>
              <h1
                className="font-bold text-lg cursor-pointer md:text-2xl"
                onClick={onClick}
              >
                {title}
              </h1>
            </div>
            <div>
              <p className="text-base font-light text-gray-500 text-justify ">
                {summary}
              </p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap items-center justify-start gap-4">
              {cat.map((c, i) => (
                <button
                  key={i}
                  className="px-3 py-1 text-base rounded-md bg-gray-300"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="col-span-3">
            <img
              src={img}
              alt="Article Image"
              className="rounded-2xl object-cover aspect-[3/2] border-2 border-black/10"
            />
          </div>
        </div>
      </article>

      <div className="border-b-2 border-black/10" />
    </>
  );
};

export default List;
