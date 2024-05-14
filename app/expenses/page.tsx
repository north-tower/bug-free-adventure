function Expenses(){
  return(
    <>
    <div className="min-h-screen bg-gray-200 p-10">

  <div className="">
    <input className="peer hidden" type="checkbox" name="offcanvas" id="offcanvas" checked />

    <button className="hidden rounded-full bg-blue-600 px-12 py-6 font-semibold text-white peer-checked:inline-block">Expenses</button>

    <label className="inline-block cursor-pointer rounded-full bg-blue-600 px-12 py-6 font-semibold text-white hover:opacity-90 peer-checked:fixed peer-checked:inset-0 peer-checked:z-20 peer-checked:h-screen peer-checked:w-screen peer-checked:rounded-none peer-checked:opacity-0" for="offcanvas">OPEN</label>
    <div className="pointer-events-none fixed top-0 left-0 z-10 h-screen w-screen bg-gray-700/30 opacity-0 peer-checked:opacity-100"></div>
    <div className="fixed -right-96 top-0 z-30 flex h-screen w-96 max-w-full bg-white shadow-lg transition-all peer-checked:right-0">
     

      <div className="">
   
      <div className="m-10 max-w-sm">
  <label for="credit-card" className="mb-2 block text-sm font-medium">Description</label>
  <div className="relative">
    <input type="text" id="credit-card" name="credit-card" className="block w-full rounded-md border border-gray-200 py-3 px-4 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex items-center pr-4">
      <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
      </svg>
    </div>
  </div>
</div>

<div className="m-10 max-w-sm">
  <label for="price" className="mb-2 block text-sm font-medium">Amount</label>
  <div className="relative">
    <input type="text" id="price" name="price" className="block w-full rounded-md border border-gray-200 py-3 px-4 pl-9 pr-16 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="0.00" />
    <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4">
      <span className="text-gray-500">$</span>
    </div>
    <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex items-center pr-4">
      <span className="text-gray-500">USD</span>
    </div>
  </div>
</div>

<div className="m-10 max-w-sm">
  <label for="website" className="block text-sm font-medium text-gray-700">Website URL</label>
  <div className="flex rounded-md shadow-sm">
    <div className="inline-flex min-w-fit items-center rounded-l-md border border-r-0 border-gray-200 bg-gray-50 px-4">
      <span className="text-sm text-gray-500">http://</span>
    </div>
    <input type="text" name="website" id="website" className="block w-full rounded-r-md border border-gray-200 py-3 px-4 pr-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="www.example.com" />
  </div>
</div>





      </div>
     
    </div>
    <div></div>
  </div>
 
</div>

    </>
  )
}

export default Expenses