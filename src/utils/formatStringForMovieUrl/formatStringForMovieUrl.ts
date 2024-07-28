// Currently my type of movies === Top Rated ... it needs to be top_rated

export const formatStringForMovieUrl = (text:string) => {
    // Takes Top Rated and return top_rated
  return  text = text.toLowerCase().replace(/\s+/g,"_")
}