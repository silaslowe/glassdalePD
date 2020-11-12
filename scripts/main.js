import { OfficerList } from "./officers/OfficerList.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { noteForm } from "../notes/NoteForm.js"
import { noteList } from "../notes/NoteList.js"
import { AlibiList } from "./alibis/alibiList.js"
import { getWitnesses } from "./witnesses/WitnessProvider.js"
import { WitnessList } from "./witnesses/WitnessList.js"
import { renderFacilitiesButton } from "./facilities/DisplayFacilitiesButton.js"
import { renderCriminalsButton } from "./criminals/DisplayCriminalsBtn.js"

OfficerSelect()
ConvictionSelect()
CriminalList()
OfficerList()
noteForm()
noteList()
AlibiList()
getWitnesses()
WitnessList()
renderFacilitiesButton()
renderCriminalsButton()
