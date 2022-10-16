namespace TuitionFondIrida.ApiAdapter;

public class ConvertableContactUsTemplate
{
    public ConvertableContactUsTemplate(string firstName, string lastName, string emailAddress,
        string additionalComment,
        string phoneNumber)
    {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.EmailAddress = emailAddress;
        this.AdditionalComment = additionalComment;
        this.PhoneNumber = phoneNumber;
    }

    private string FirstName { get; }

    private string LastName { get; }

    private string EmailAddress { get; }

    private string AdditionalComment { get; }

    private string PhoneNumber { get; }

    public string Convert()
    {
        return $@"<!DOCTYPE html>
         <html lang=""en"">
            <head>
               <link rel=""preconnect""
               href=""https://fonts.googleapis.com"">
               <link rel=""preconnect""
               href=""https://fonts.gstatic.com"" crossorigin>
               <link href=""https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"" rel=""stylesheet"">
               <title>Fondacija putevima devojčica - komentar</title>
               
            </head>
            
            <body style=""margin:0; font-family: Montserrat, sans-serif; background-color: #f4f4f4"">
            <table lang=""en"" border=""0"" cellspacing=""0"" cellpadding=""0"" role=""presentation"" style=""max-width:640px; width:100%; margin:0 auto;"">
            <tr>
               <td>
                  <div style=""background-color:#5F4477; padding:60px 20px;"">
                  <center>
                     <p style=""font-size:26px; font-weight:700; margin:0; color:#ffffff;"">Fondacija</p>
                     <p style=""font-size:39px; font-weight:700; margin:0; color:#ffffff;"">Putevima Devojčica</p>
                  </center>
                  </div>
               </td>
            </tr>
            <tr>
               <td>
                  <div style=""padding:30px 20px; background-color: #ffffff;"">                    
                     <center>                        
                        <p style=""font-size:20px; margin:0 0 20px 0; font-weight:700;"">Novi komentar od:</p>                       
                        <p style=""font-size:20px; margin:0;"">{this.FirstName} {this.LastName} ({this.EmailAddress}  :  {this.PhoneNumber})</p>
                     </center>
                  </div>            
               </td>
            </tr>
            <tr>
               <td>
                  <div style=""padding: 0px 20px 30px; background-color:#ffffff;"">                    
                  <center>                        
                     <p style=""font-size: 16px; line-height:22px; margin:0;""> 
                           ""{this.AdditionalComment}""
                      </p>                    
                  </center>
                  </div>            
               </td>
            </tr>
            </table>
            </body>
         </html>
         ";
    }
}