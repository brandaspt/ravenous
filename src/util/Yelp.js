const apiKey = process.env.REACT_APP_YELP_API_KEY
const baseUrl = "https://api.yelp.com/v3/businesses/search"

const Yelp = {
    search: async (term, location, sortBy) => {
        try {
            const resp = await fetch(
                `https://cors-anywhere.herokuapp.com/${baseUrl}?term=${term}&location=${location}&sort_by=${sortBy}`,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`
                    }
                }
            )
            const { businesses } = await resp.json()
            console.log(businesses)
            if (businesses) {
                return businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default Yelp
