export default function Greetings({profileUsername}){
    return(
        <section>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Welcome back, <span className="font-bold">{profileUsername}</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">Active Projects:</p>
         </div>
        </section>
    )
};