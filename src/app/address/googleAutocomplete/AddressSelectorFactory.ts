import AddressSelector from './AddressSelector';
import AddressSelectorNZ from './AddressSelectorNz';
import AddressSelectorUK from './AddressSelectorUk';

export default class AddressSelectorFactory {
    static create(autocompleteData: google.maps.places.PlaceResult): AddressSelector {
        const addressSelector = new AddressSelector(autocompleteData);

        switch (addressSelector.getCountry()) {
        case 'GB':
            return new AddressSelectorUK(autocompleteData);

        case 'NZ':
            return new AddressSelectorNZ(autocompleteData);
        }

        return addressSelector;
    }
}
