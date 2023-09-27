import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import pl from "@/locales/pl.json";
import de from "@/locales/de.json";


export default createI18n({
    locale: "pl",
    fallbackLocale: "en",
    messages: {
        en,
        pl,
        de
    },
    numberFormats:{
        en: {
            currency: {
                style: "currency",
                currency: "USD"
            }
        },
        pl: {
            currency: {
                style: "currency",
                currency: "PLN"
            }
        },
        de: {
            currency: {
                style: "currency",
                currency: "EUR"
            }
        }
    }
});