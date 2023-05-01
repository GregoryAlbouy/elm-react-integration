module CountingButton exposing (Msg(..), main, update, view)

import Browser
import Html exposing (Html, button, text)
import Html.Events exposing (onClick)



-- Main


main : Program () Model Msg
main =
    Browser.element
        { init = \_ -> ( 0, Cmd.none )
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        }



-- Model


type alias Model =
    Int



-- Update


type Msg
    = Increment


update : Msg -> Model -> ( Model, Cmd msg )
update msg count =
    case msg of
        Increment ->
            ( count + 1, Cmd.none )



-- View


view : Int -> Html Msg
view count =
    button
        [ onClick Increment ]
        [ text ("count is " ++ String.fromInt count) ]
