import bannerImage from "../assets/Voroni__mit_Titel_EineEbene.png";
function BannerImage() {
  return (
    <div className="flex justify-center items-center flex-col w-full h-full">
      <div className="w-3/4 h-1/4">
        <img src={bannerImage} alt="Description of the image" className="w-full h-full" />
      </div>
      <div className="text-xs text-black-900 mt-2">
        &copy; inspired by the work of Mina Tahaei & Katja Striedelmeyer
      </div>
    </div>
  );
}
export default BannerImage;
