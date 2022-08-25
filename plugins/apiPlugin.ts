import {API, IApi} from "~/lib/api";

export default defineNuxtPlugin(() => {
    const env = useRuntimeConfig()
    console.log('Runtime env:', env)

    return {
        provide: {
            api: {
                instance: (type: string): IApi => {
                    return new API(type, env)
                }
            }
        }
    }
})