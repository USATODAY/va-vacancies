def parse(raw_data):
    entries = raw_data["local_lookup"]
    entries.append(format_national(raw_data))
    return entries


def format_national(raw_data):
    national_data = raw_data["national_look"][0]
    national_data["top_10"] = raw_data["ten_worst"]
    return national_data
