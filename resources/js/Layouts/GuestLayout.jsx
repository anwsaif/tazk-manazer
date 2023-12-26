import { usePage } from "@inertiajs/react";
const lessThanScreen = [
    '/login',
    '/forgot-password',
]

export default function Guest({ children }) {
  const { url } = usePage()

  return (

    <div className={ (lessThanScreen.find(a => a === url) ? 'h-screen ' : 'h-full') + " rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"}>
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 ">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );

}
