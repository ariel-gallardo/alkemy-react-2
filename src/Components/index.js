import Content from "./Content";
import { CountriesContext, CountriesProvider } from "./CountriesContext";

// eslint-disable-next-line
export default {
    Content,
    Countries: {
        Provider: CountriesProvider,
        Context : CountriesContext
    }
}