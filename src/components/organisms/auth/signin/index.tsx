import { FormattedMessage } from "react-intl"

import TextInput from "@/components/atoms/TextInput"

import messages from "./messages"
import Button from "@/components/atoms/Button"
import MailOutlineIcon from "@/components/atoms/Icon/MailOutline"
import KeyIcon from "@/components/atoms/Icon/Key"
import VisibilityOutlineIcon from "@/components/atoms/Icon/VisibilityOutline"

const SignIn = (): JSX.Element => <div >
  <h1>
    <FormattedMessage {...messages.signin} />
  </h1>
  Sign in with your taskspace account
  <div className="flex gap-4 flex-col py-4">
    <TextInput
      startIcon={<div className="w-6 h-6" > <MailOutlineIcon /></div>}
      capitalizeLabel
      intent='secondary'
      label={messages.email}
    />
    <TextInput
    intent='secondary'
      startIcon={<div className="w-6 h-6" > <KeyIcon /></div>}
      capitalizeLabel label={messages.password}
      endIcon={<div className="w-6 h-6" >
        <VisibilityOutlineIcon />
      </div>}
    />
    <Button intent='primary' className="font-medium" >
      <FormattedMessage {...messages.continue} />
    </Button>
  </div>
  

  <p>
    <FormattedMessage {...messages.needSomethingElse} />
  </p>

  <Button isLink to='/' >
    <FormattedMessage {...messages.createFreeAccount} />
  </Button>

</div>

export default SignIn