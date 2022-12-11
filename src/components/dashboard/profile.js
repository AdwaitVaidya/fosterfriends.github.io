import * as React from "react";
import { Box, Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
export const Profile = () => {



    return (
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
        }}
      >
            <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 0
      }}
    >
      <img src="\static\SID.png" width="1600"/>

    <Typography variant="body5">
        
Close to 6.5 million pets enter animal shelters in the United States each year. Unfortunately, due to overpopulation and lack of resources, close to 5,500 animals are killed in shelters every day. 
In essence, fostering pets isn’t just a beautiful experience, but it’s also keeping pets alive.

</Typography>
<Typography>

When you choose to become a foster pet parent, you’re taking home an animal that would otherwise stay at a shelter. By becoming their temporary home, you can provide them a safe environment until they find their forever home.

      </Typography>
      <Typography variant="h5">
First, What's the Difference Between Fostering and Rescuing Pets?

</Typography>

<Typography>
Before we discuss the importance and benefits of fostering pets, it’s essential to explain the differences between rescuing and promoting:
</Typography>

<Typography>
Foster homes: provide a temporary transition for pets that are waiting to find them forever homes. Foster homes help with socialization, behavioral problems and help pets be ready for adoption. Someone fostering a pet can help with feeding, grooming, health controls, vaccinations, and taking the pet to medical appointments. 

</Typography>
<Typography>
Rescue homes: these provide a permanent home for pets. When someone rescues a pet, they’re adopting them, taking full responsibility for the pet’s overall well-being and health. They’re the pet’s forever homes. 

</Typography>

<Typography variant="h5">
The Importance of Fostering Pets
</Typography>
<Typography>
Fostering is the most effective way to reduce overcrowding in shelters, thus preventing killings and opening space for more animals to be saved. Because some pets in shelter homes have behavioral and socialization issues, a fostering environment can give them a chance to be prepared for adoption. Here, animals feel the love and support of their foster pet parents and can overcome fears, recover from trauma, and fully express their personalities – all critical factors in increasing adoption rates.

</Typography>
<Typography>

Because some pets are not accustomed to living at home, they might not know how to behave in this environment. When this happens, many pets keep going in and out of shelter homes as people don’t know how to manage pets without training.



</Typography>
<Typography variant="h5">
Benefits of Fostering Pets

</Typography>

<Typography>
Fostering pets is a win-win situation that benefits everyone involved. First, it helps local shelters maintain levels of animals and accept more animals. Secondly, it allows the pets to live in a real home while they wait for adoption. Third, foster parents can enjoy the joy and pleasure of helping a pet in need. 

</Typography>
<Typography>
Increases a pet’s chance of getting adopted: since foster families can learn more about the pet’s personality, they can teach them house manners and other behavioral tricks to help them get adopted faster. 

</Typography>
<Typography>
Improves a pet’s social skills: many abandoned pets have been without a human family for months or even years. Fearfulness that shows up as aggressiveness is very common. But, being in contact with humans and strangers will help your foster pet learn how to socialize. 

</Typography>
<Typography>
Saves a pet’s life: with thousands of pets being killed by shelter homes across the country, fostering a pet can save their lives and give them a second chance in life. 

</Typography>

      </Box>
            </div>

    );

}