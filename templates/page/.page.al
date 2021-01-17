page <id> "<name>"
{
    PageType = Card;
    ApplicationArea = All;
    UsageCategory = Administration;
    SourceTable = TableName;
    
    layout
    {
        area(Content)
        {
            group(General)
            {
                field(Name; NameSource)
                {
                    ApplicationArea = All;
                    
                }
            }
        }
    }
    
    actions
    {
        area(Processing)
        {
        }
    }
    
    var
        myInt: Integer;
}