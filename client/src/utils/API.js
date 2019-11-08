import axios from "axios";

const BASEURL = "https://data.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-ratings%40public&rows=10&sort=number_of_reviews&facet=last_scraped&facet=experiences_offered&facet=host_since&facet=host_response_time&facet=host_is_superhost&facet=host_verifications&facet=host_has_profile_pic&facet=host_identity_verified&facet=city&facet=neighbourhood_cleansed&facet=state&facet=market&facet=country&facet=is_location_exact&facet=property_type&facet=room_type&facet=bed_type&facet=calendar_last_scraped&facet=first_review&facet=last_review&facet=requires_license&facet=jurisdiction_names&facet=instant_bookable&facet=is_business_travel_ready&facet=cancellation_policy&facet=require_guest_profile_picture&facet=require_guest_phone_verification&refine.last_scraped=2017&refine.state=IL&refine.host_has_profile_pic=True";
const APIKEY = "&apikey=4b75efb5f8a9dd5164a16a1d095142e91479f897f56a948e83042d9e";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};

