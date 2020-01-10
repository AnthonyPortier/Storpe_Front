

    const handleMMRChange = (result) =>{
        const cote = 1.10
        let attributedPoints = 0

        if (result === 'victory'){
            cote>=1.10?
                attributedPoints = cote*10:
                attributedPoints =cote*100-100

        }

        else if (result === 'defeat'){
            switch (cote) {
                case cote>2.60:
                    attributedPoints=-5
                break;
            
                case cote>2.30:
                    attributedPoints=-6
                break;

                case cote>2.10:
                    attributedPoints=-7
                break;

                case cote>1.86:
                    attributedPoints=-7
                break;

                case cote>1.66:
                    attributedPoints=-8
                break;

                case cote>1.50:
                    attributedPoints=-10
                break;

                case cote>1.3:
                    attributedPoints=-11
                break;

                case cote>1.1:
                    attributedPoints=-15
                break;


                default:
                    break;
            }

        }

        else{
            return("ERREUR")
        }

        return(attributedPoints)
    }

    
    

export default handleMMRChange;