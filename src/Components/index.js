import Content from "./Content";
import { CountriesContext, CountriesProvider } from "./CountriesContext";
import Auth from './RouteAuth'

// eslint-disable-next-line
export default {
    Content,
    Countries: {
        Provider: CountriesProvider,
        Context : CountriesContext
    },
    ProtectedRoutes: {
        Auth
    }
}