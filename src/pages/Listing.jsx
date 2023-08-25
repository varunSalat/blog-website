import { List, Pagination } from "../components";

const Listing = () => {
  return (
    <div className="grid md:grid-cols-12">
      <div className="col-span-2"></div>
      <section className="padding flex flex-col gap-4 w-full col-span-8">
        <div>
          <span className="my-2 block text-2xl font-semibold">Articles </span>
          <div className="border-b-2 border-black/10" />
        </div>
        <List />
        <div className="border-b-2 border-black/10" />
        <List />
        <div className="border-b-2 border-black/10" />
        <List />
        <div className="border-b-2 border-black/10" />
        <List />
        <div className="border-b-2 border-black/10" />
        <div className="flex justify-end">
          <Pagination />
        </div>
      </section>
      <div className="col-span-2"></div>
    </div>
  );
};

export default Listing;
