import AddressSelector from './AddressSelector';

export default class AddressSelectorNZ extends AddressSelector {
    getCity(): string {
        return this._get('postal_town', 'long_name') ||
            this._get('sublocality', 'long_name') ||
            this._get('locality', 'long_name') ||
            this._get('neighborhood', 'short_name');
    }
}
