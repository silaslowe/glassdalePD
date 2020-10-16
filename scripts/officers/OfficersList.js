import { getOfficers, useOfficers } from "./OfficerProvider.js"

export const OfficerList = () => {
  const officers = getOfficers().then(useOfficers())
}
