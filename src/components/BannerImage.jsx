import bannerImage from '../assets/Voroni__mit_Titel_EineEbene.png';
function BannerImage(){
    return (
        <div className="flex justify-center items-center w-full h-full">
          <img src={bannerImage} alt="Description of the image" className="w-3/4 h-1/4" />
        </div>
      );
}
export default BannerImage;