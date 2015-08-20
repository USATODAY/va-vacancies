import us

def parse(raw_data):
    entries = raw_data["local_lookup"]
    parsed_entries = []
    national_entry = format_national(raw_data)
    for entry in entries:
        entry["national_overall"] = national_entry["overall_percent_vacant"]
        parsed_entries.append(get_full_state_name(entry))
    parsed_entries.append(national_entry)
    return parsed_entries

def get_full_state_name(entry):
    new_entry = entry
    entry_state_abbr = entry["state"]
    full_state_obj = getattr(us.states, entry_state_abbr)
    new_entry["full_state"] = full_state_obj.name
    return new_entry

def format_national(raw_data):
    national_data = raw_data["national_look"][0]
    national_data["top_10"] = raw_data["ten_worst"]
    return national_data
