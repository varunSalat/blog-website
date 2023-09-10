
const MostViewedCard = () => {
  return (
    <div className="flex flex-col gap-2 w-[min(350px,100%)]   rounded-xl shadow p-3 my-2">
      <figure >
        <img src="ast.jpg" alt="" className="rounded-md h-[250px] object-cover" />
      </figure>
      <h1 className="text-lg font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, officiis!
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, non similique hic provident culpa totam...</p>
    </div>
  )
}

export default MostViewedCard
