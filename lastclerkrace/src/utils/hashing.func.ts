export function encodeBase64(input: any) {
    const utf8Bytes = new TextEncoder().encode(JSON.stringify(input));
    const binaryString = String.fromCharCode(...Array.from(utf8Bytes));
    return btoa(binaryString);
}

export function decodeBase64(base64: string) {
    const binaryString = atob(base64);
    const utf8Bytes = new Uint8Array(Array.from(binaryString).map(char => char.charCodeAt(0)));
    const decodedData = new TextDecoder().decode(utf8Bytes);
    return JSON.parse(decodedData);
}
