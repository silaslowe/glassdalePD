import { getOfficers, useOfficers } from "./OfficerProvider.js"

export const OfficerList = () => {
  getOfficers().then(useOfficers())
}
