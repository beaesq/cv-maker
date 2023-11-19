import PropTypes from "prop-types";
import Input from "./Input";
import TextArea from "./TextArea";

export default function PersonalInfoSection({ person, setPerson }) {
  function handleFirstNameChange(e) {
    setPerson({ ...person, firstName: e.target.value });
  }

  function handleLastNameChange(e) {
    setPerson({ ...person, lastName: e.target.value });
  }

  function handleTitleChange(e) {
    setPerson({ ...person, title: e.target.value });
  }

  function handlePhoneChange(e) {
    setPerson({ ...person, phone: e.target.value });
  }

  function handleAddressChange(e) {
    setPerson({ ...person, address: e.target.value });
  }

  function handleEmailChange(e) {
    setPerson({ ...person, email: e.target.value });
  }

  function handleSummaryChange(e) {
    setPerson({ ...person, summary: e.target.value });
  }

  return (
    <form className="personal">
      <Input
        label="First Name"
        value={person.firstName}
        onChange={handleFirstNameChange}
      />
      <Input
        label="Last Name"
        value={person.lastName}
        onChange={handleLastNameChange}
      />
      <Input label="Title" value={person.title} onChange={handleTitleChange} />
      <Input
        label="Phone number"
        value={person.phone}
        onChange={handlePhoneChange}
      />
      <Input
        label="Address"
        value={person.address}
        onChange={handleAddressChange}
      />
      <Input label="Email" value={person.email} onChange={handleEmailChange} />
      <TextArea
        label="Summary"
        value={person.summary}
        onChange={handleSummaryChange}
      />
    </form>
  );
}

PersonalInfoSection.propTypes = {
  person: PropTypes.object,
  setPerson: PropTypes.func,
};
