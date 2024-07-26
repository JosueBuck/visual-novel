function formatEnumValue(value: string): string {
    // Split the value at each point a lowercase letter is followed by an uppercase letter
    // and join the resulting array with a space
    return value
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        // Optionally, make the first letter of the result uppercase if desired
        .replace(/^./, str => str.toUpperCase());
}