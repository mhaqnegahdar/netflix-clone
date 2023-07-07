//Actions
import getCurrentUser from "@/actions/getCurrentUser";
import Image from "next/image";

// Components
import EmptyState from "@/components/common/EmptyState";

const Profile = async () => {
  const currentUser = await getCurrentUser();

  // If movie did not exist
  if (!currentUser) {
    return <EmptyState showBtn btnLabel="Home" btnPath="/" />;
  }

  return (
    <main className="flex items-center justify-center h-full">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who is watching?
        </h1>
        <button className="flex items-center justify-center gap-8 mt-10">
          <div className="group flex-row w-44 mx-auto">
            <figure className=" w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden relative">
              <Image
                src={
                  currentUser?.image
                    ? currentUser?.image
                    : `/images/default-blue.png`
                }
                alt="Netflix"
                fill
                className="!static object-contain"
              />
            </figure>
            <h3 className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white whitespace-nowrap relative -left-1/2 ">
              {currentUser?.name}
            </h3>
          </div>
        </button>
      </div>
    </main>
  );
};

export default Profile;
