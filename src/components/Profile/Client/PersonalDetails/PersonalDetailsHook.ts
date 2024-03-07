import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const usePersonalDetailHook = () => {
  const clientProfileReducer = useSelector((state: any) => state.clientProfileReducer);
  const coderAddressReducer = useSelector((state: any) => state.profile.coderAddressReducer);
  const [clientProfileData, setClientProfileData] = useState<any>({});

  useEffect(() => {
    if (
      clientProfileReducer?.clientProfileData &&
      Object.keys(clientProfileReducer?.clientProfileData).length > 0
    ) {
      const data = clientProfileReducer?.clientProfileData;
      setClientProfileData({
        ...data,
        basicInfo: {
          firstName: data.first_name,
          lastName: data.last_name,
          username: data.id,
          company_email: data.email,
          phone: data.phone,
          logo: ''
        },
        companyDetail: {
          company_name: data.company_name,
          company_website: data.company_website
        },
        address: {
          address_line1: coderAddressReducer?.address?.address_line_1 ?? '',
          address_line2: coderAddressReducer?.address?.address_line_2 ?? '',
          city: data.city,
          state: data.state,
          country: data.country,
          zipcode: coderAddressReducer?.address?.zip_code ?? ''
        },
        digitalPresence: {
          linkedin: data.linkedin_url,
          github: data.glassdoor_url,
          stackoverflow: data.youtube
        }
      });
    }
  }, [clientProfileReducer, coderAddressReducer]);

  return {
    clientProfileData
  };
};
