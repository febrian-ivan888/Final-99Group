import React, { useState } from 'react';

function PhoneAnonymizer({ phoneNumber }) {
    const [showFullNumber, setShowFullNumber] = useState(false);

    const toggleDisplay = () => {
        setShowFullNumber(!showFullNumber);
    };

    const anonymizedNumber = phoneNumber.substring(0, 4) + ' XXXX';

    return ( <
        div onClick = { toggleDisplay } > { showFullNumber ? phoneNumber : anonymizedNumber } 
        
        </div>
    );
}

export default PhoneAnonymizer;