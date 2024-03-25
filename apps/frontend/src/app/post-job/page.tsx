export default function PostJob() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96">
        <h1 className="mb-6 text-center text-4xl font-bold">Post a Job</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            className="rounded border border-gray-200 p-3"
          />
          <input
            type="text"
            placeholder="Company"
            className="rounded border border-gray-200 p-3"
          />
          <input
            type="text"
            placeholder="Location"
            className="rounded border border-gray-200 p-3"
          />
          <input
            type="text"
            placeholder="Description"
            className="rounded border border-gray-200 p-3"
          />
          <button className="bg-primary rounded p-3 text-white">Post</button>
        </form>
      </div>
    </div>
  )
}
