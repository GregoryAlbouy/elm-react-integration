module IncrementingButtonTests exposing (..)

import Expect
import Fuzz exposing (int)
import IncrementingButton exposing (Msg(..), update, view)
import Test exposing (Test, describe, fuzz, test)
import Test.Html.Event as Event
import Test.Html.Query as Query
import Test.Html.Selector exposing (text)


testUpdate : Test
testUpdate =
    describe "update"
        [ fuzz int "increments counter" <|
            \randomInt ->
                Expect.equal
                    (randomInt |> update Increment |> Tuple.first)
                    (randomInt + 1)
        ]


testView : Test
testView =
    describe "view"
        [ fuzz int "shows current count" <|
            \randomInt ->
                view randomInt
                    |> Query.fromHtml
                    |> Query.has [ text ("count is " ++ String.fromInt randomInt) ]
        , test "increments on click" <|
            \_ ->
                view 0
                    |> Query.fromHtml
                    |> Event.simulate Event.click
                    |> Event.expect Increment
        ]
