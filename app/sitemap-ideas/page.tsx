import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const navItems = [
  "Inplay",
  "Cricket",
  "Futebol",
  "Tennis",
  "Fantasy Pro",
  "Live Casino",
  "SportsBook",
  "Election",
  "Crash Games",
  "Live Card",
  "Slot Games",
  "Crash Games",
];

const siteTitle = "Sports Bet";

export default function Home() {
  return (
    <div className="containerflex min-h-screen w-full flex-col dark bg-black">
      

      <main className="container flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div id="column-primary" className="page-column">
          <div className="column-element-wrapper">
            <div className="size1of2">
              <article className="widget content-container">
                <h2 className="widget-heading">Site Index</h2>

                <article className="widget rich-text-element main-column">
                  <div className="group article">
                    <div className="article-content">
                      <p>&nbsp;</p>

                      <div className="row">
                        <h2>
                          <u>
                            <a href="https://www.unibet.co.uk/racing">Racing</a>
                          </u>
                        </h2>

                        <div className="column">
                          <h3>
                            <a href="https://www.unibet.co.uk/racing/guides">
                              Racing Guides
                            </a>
                          </h3>

                          <ul>
                            <li>
                              <a href="https://www.unibet.co.uk/racing/guides/the-glorious-goodwood-racing-guide-1.1498635">
                                Glorious Goodwood Racing Guide
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/racing/guides/the-cheltenham-festival-racing-guide-1.1389816">
                                Cheltenham Festival Racing Guide
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/racing/guides/the-royal-ascot-racing-guide-1.1480506">
                                Royal Ascot Racing Guide
                              </a>
                            </li>
                          </ul>

                          <h3>
                            <a href="https://www.unibet.co.uk/racing/naps-and-tips">
                              Tips and Naps
                            </a>
                          </h3>

                          <h3>
                            <a href="https://www.unibet.co.uk/racing/rules">
                              Racing Rules
                            </a>
                          </h3>

                          <h3>
                            <a href="https://www.unibet.co.uk/racing/festivals/">
                              Racing Festivals
                            </a>
                          </h3>

                          <ul>
                            <li>
                              <a href="https://www.unibet.co.uk/racing/festivals/cheltenham/">
                                Cheltenham Festival
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/racing/festivals/epsom-derby/">
                                Epsom Derby
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/racing/festivals/royal-ascot/">
                                Royal Ascot
                              </a>
                            </li>
                          </ul>

                          <h4>&nbsp;</h4>

                          <h2>
                            <a href="/betting">Sports</a>
                          </h2>

                          <h3>
                            <a href="https://www.unibet.co.uk/betting/sports/filter/all/all/all/all/in-play">
                              Live Betting - In Play Betting
                            </a>
                          </h3>

                          <h3>
                            <a href="https://www.unibet.co.uk/betting/sports/filter/all/all/all/all/streaming">
                              Live Streaming
                            </a>
                          </h3>

                          <h3>
                            <a href="https://www.unibet.co.uk/betting/bet-calculator/">
                              Bet Calculator
                            </a>
                          </h3>

                          <ul>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/bet-calculator/">
                                Single
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/bet-calculator/double/">
                                Double
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/bet-calculator/treble/">
                                Treble
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/bet-calculator/accumulator/">
                                Accumulator
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/bet-calculator/trixie/">
                                Trixie
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/bet-calculator/patent/">
                                Patent
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/bet-calculator/yankee/">
                                Yankee
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/bet-calculator/canadian/">
                                Canadian
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/bet-calculator/heinz/">
                                Heinz
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/bet-calculator/super-heinz/">
                                Super Heinz
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/bet-calculator/goliath/">
                                Goliath
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/bet-calculator/lucky15/">
                                Lucky 15
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/bet-calculator/lucky31/">
                                Lucky 31
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/bet-calculator/lucky63/">
                                Lucky 63
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/bet-calculator/forecasts/">
                                Forecasts
                              </a>
                            </li>
                          </ul>

                          <h3>
                            <a href="https://www.unibet.co.uk/betting/virtualsports">
                              Virtual Sports Betting
                            </a>
                          </h3>

                          <h3>
                            <a href="https://www.unibet.co.uk/betting/guides">
                              Betting Guides
                            </a>
                          </h3>

                          <ul>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/guides/the-rise-and-rise-of-women-s-football-1.2346788">
                                Womens World Championship Betting Guide
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/guides/accumulator-betting-guide-1.1716485">
                                Accumulator Betting Guide
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/guides/bet-builder-betting-guide-1.1638971">
                                Bet Builder Betting Guide
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/guides/premier-league-betting-guide-1.1518250">
                                Premier League Betting Guide
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/guides/unibet-tv-live-streaming-guide-1.1518123">
                                Unibet TV Live Streaming Guide
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/guides/fifa-esports-betting-guide-1.1443225">
                                FIFA eSports Betting Guide
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/guides/football-betting-guide-1.1008332">
                                Football Betting Guide
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/guides/how-to-bet-on-tennis-1.1008440">
                                How to Bet on Tennis
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/guides/f1-betting-guide-1.1008325">
                                F1 Betting Guide
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/guides/how-to-bet-on-nfl-1.1008337">
                                How to bet on NFL
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/guides/boxing-betting-guide-1.1008367">
                                Boxing Betting Guide
                              </a>
                            </li>
                            <li>
                              <a href="https://www.unibet.co.uk/betting/guides/in-play-betting-guide-1.1008416">
                                In Play Betting Guide
                              </a>
                            </li>
                          </ul>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/football">
                                  Football&nbsp;&gt;&gt;
                                </a>
                              </h4>

                              <ul>
                                <li>
                                  <a href="https://www.unibet.co.uk/betting/sports/filter/football/euro_2024">
                                    Euros
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.unibet.co.uk/betting/sports/filter/football/world_cup__w_">
                                    Womens World Championship{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.unibet.co.uk/betting/sports/filter/football/world_cup_2022">
                                    World Championships
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/football/international_friendly">
                                    International Friendly Matches
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/football/uefa_super_cup">
                                    UEFA Super Cup
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/football/uefa_nations_league">
                                    UEFA Nations League
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/football/afc_champions_league">
                                    AFC Champions League
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/football/champions_league">
                                    Champions League
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/football/europa_league">
                                    Europa League
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/football/netherlands/eredivisie">
                                    Eredivisie
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/football/england/premier_league">
                                    Premier League
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/football/italy/serie_a">
                                    Italy Serie A
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/football/spain/laliga">
                                    La Liga
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/football/germany/bundesliga">
                                    Bundesliga
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/football/france/ligue_1">
                                    Ligue 1
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/football/sweden/allsvenskan">
                                    Allsvenskan
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/football/finland/veikkausliiga">
                                    Veikkausliiga
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/football/norway/eliteserien">
                                    Eliteserien
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/football/denmark/superligaen">
                                    Superligaen
                                  </a>
                                </li>
                              </ul>

                              <p>&nbsp;</p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/tennis">
                                  Tennis&nbsp;&gt;&gt;
                                </a>
                              </h4>

                              <ul>
                                <li>
                                  <a href="https://www.unibet.co.uk/betting/sports/filter/tennis/grand_slam">
                                    All Grand Slams
                                  </a>

                                  <ul>
                                    <li>
                                      <a href="/betting/sports/filter/tennis/grand_slam/french_open">
                                        French Open
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/betting/sports/filter/tennis/grand_slam/french_open_women">
                                        French Open Women
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/betting/sports/filter/tennis/grand_slam/wimbledon">
                                        Wimbledon
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/betting/sports/filter/tennis/grand_slam/wimbledon_women">
                                        Wimbledon Women
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/betting/sports/filter/tennis/grand_slam/us_open">
                                        US Open
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/betting/sports/filter/tennis/grand_slam/us_open_women">
                                        US Open Women
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="https://www.unibet.co.uk/betting/sports/filter/tennis/atp">
                                    ATP (ATP Tour
                                  </a>
                                  )
                                </li>
                                <li>
                                  <a href="https://www.unibet.co.uk/betting/sports/drill-down/tennis/atp/betting/sports/filter/tennis/atp_doubles">
                                    ATP Doubles
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.unibet.co.uk/betting/sports/filter/tennis/challenger">
                                    Challenger
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.unibet.co.uk/betting/sports/filter/tennis/davis_cup">
                                    Davis Cup
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.unibet.co.uk/betting/sports/filter/tennis/itf_women">
                                    ITF (W)
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/tennis/wta">
                                    WTA
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.unibet.co.uk/betting/sports/filter/tennis/wta_doubles">
                                    WTA Doubles
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.unibet.co.uk/betting/sports/filter/tennis/wta_qual_">
                                    WTA Qualifications
                                  </a>
                                </li>
                                <li>
                                  <a href="https://www.unibet.co.uk/betting/sports/filter/tennis/specials">
                                    Tennis Betting Specilas
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/basketball">
                                  Basketball&nbsp;&gt;&gt;
                                </a>
                              </h4>

                              <ul>
                                <li>
                                  <a href="/betting/sports/filter/basketball/nba">
                                    NBA
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/basketball/nba_specials">
                                    NBA Specials
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/basketball/wnba">
                                    WNBA
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/basketball/fiba_3x3_world_cup">
                                    FIBA 3x3 World Cup
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/basketball/fiba_3x3_world_cup__w_">
                                    FIBA 3x3 World Cup (W)
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/basketball/vtb_united_league">
                                    VTB United League
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/ice_hockey">
                                  Ice Hockey &gt;&gt;
                                </a>
                              </h4>

                              <ul>
                                <li>
                                  <a href="/betting/sports/filter/ice_hockey/nhl">
                                    NHL
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/ice_hockey/champions_hockey_league">
                                    Champions Hockey League
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/ice_hockey/khl">
                                    KHL
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/ice_hockey/world_championship">
                                    World Championship
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/american_football">
                                  American Football&nbsp;&gt;&gt;
                                </a>
                              </h4>

                              <ul>
                                <li>
                                  <a href="/betting/sports/filter/american_football/cfl">
                                    CFL
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/american_football/ncaa">
                                    NCAA
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/american_football/nfl">
                                    NFL
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/athletics">
                                  Athletics
                                </a>
                              </h4>
                            </div>
                          </div>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/australian_rules">
                                  Australian Rules&nbsp;&gt;&gt;
                                </a>
                              </h4>

                              <ul>
                                <li>
                                  <a href="/betting/sports/filter/australian_rules/afl">
                                    AFL
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/australian_rules/sanfl">
                                    SANFL
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/australian_rules/vfl">
                                    VFL
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/australian_rules/wafl">
                                    WAFL
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/baseball">
                                  Baseball &gt;&gt;
                                </a>
                              </h4>

                              <ul>
                                <li>
                                  <a href="/betting/sports/filter/baseball/mlb">
                                    MLB
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/boxing">
                                  Boxing
                                </a>
                              </h4>
                            </div>
                          </div>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/chess">
                                  Chess &gt;&gt;
                                </a>
                              </h4>

                              <ul>
                                <li>
                                  <a href="/betting/sports/filter/chess/international_tournaments">
                                    International Tournaments
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/chess/world_championship">
                                    World Championship
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/cricket">
                                  Cricket &gt;&gt;
                                </a>
                              </h4>

                              <ul>
                                <li>
                                  <a href="/betting/sports/filter/cricket/county_championship_div_1">
                                    County Championship Div 1
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/cricket/county_championship_div_2">
                                    County Championship Div 2
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/cricket/global_t20_canada">
                                    Global T20 Canada
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/cricket/icc_world_cup_2019">
                                    ICC World Cup 2019
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/cricket/icc_world_twenty20_2020">
                                    ICC World Cup 2020
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/cricket/international_one_day">
                                    International One Day
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/cricket/international_one_day__w_">
                                    International One Day (W)
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/cricket/international_test_cricket">
                                    International Test Cricket
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/cricket/international_twenty20">
                                    International Twenty20
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/cricket/international_twenty20__w_">
                                    International Twenty20 (W)
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/cricket/royal_london_one_day_cup">
                                    Royal London One Day Cup
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/cycling">
                                  Cycling &gt;&gt;
                                </a>
                              </h4>

                              <ul>
                                <li>
                                  <a href="/betting/sports/filter/cycling/tour/classification">
                                    Tour Classification
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/cycling/criterium_du_dauphine/stages">
                                    Criterium du Dauphiné
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/darts">
                                  Darts &gt;&gt;
                                </a>
                              </h4>

                              <ul>
                                <li>
                                  <a href="/betting/sports/filter/darts/pdc_world_championship">
                                    PDC World Championship
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/e-sports">
                                  E-Sports &gt;&gt;
                                </a>
                              </h4>

                              <ul>
                                <li>
                                  <a href="/betting/sports/filter/e-sports/call_of_duty">
                                    Call of Duty
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/e-sports/cs_go">
                                    CS:GO
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/e-sports/dota_2">
                                    Dota 2
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/e-sports/heroes_of_the_storm">
                                    Hereos of the Storm
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/e-sports/league_of_legends">
                                    League of Legends
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/e-sports/overwatch">
                                    Overwatch
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/e-sports/rocket_league">
                                    Rocket League
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/e-sports/starcraft_2">
                                    Starcraft 2
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/e-sports/street_fighter_v">
                                    Street Fighter V
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/futsal">
                                  Futsal &gt;&gt;
                                </a>
                              </h4>

                              <ul>
                                <li>
                                  <a href="/betting/sports/filter/futsal/russia">
                                    Russia
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/futsal/spain">
                                    Spain
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/gaelic_sports">
                                  Gaelic Sports &gt;&gt;
                                </a>
                              </h4>

                              <ul>
                                <li>
                                  <a href="/betting/sports/filter/gaelic_sports/gaelic_football">
                                    Gaelic Football
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/golf">
                                  Golf &gt;&gt;
                                </a>
                              </h4>

                              <ul>
                                <li>
                                  <a href="/betting/sports/filter/golf/pga_tour">
                                    PGA Tour
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/golf/european_tour">
                                    European Tour
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/golf/lpga_tour">
                                    LPGA Tour
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/golf/u_s__open">
                                    U.S. Open
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/golf/the_open_championship">
                                    The Open Championship
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/golf/ryder_cup">
                                    Ryder Cup
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/golf/champions_tour">
                                    Champions Tour
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/golf/season_bets">
                                    Season Bets
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/golf/solheim_cup">
                                    Solheim Cup
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/golf/the_masters">
                                    The Masters
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/golf/u_s__pga_championship">
                                    U.S. PGA Championship
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/golf/walker_cup">
                                    Walker Cup
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/handball">
                                  Handball &gt;&gt;
                                </a>
                              </h4>

                              <ul>
                                <li>
                                  <a href="/betting/sports/filter/handball/european_championship__w_">
                                    European Championship (W)
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/handball/international_friendly_matches">
                                    International Friendly Matches
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/handball/world_championship">
                                    World Championship
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="row">
                            <div className="column">
                              <h4>
                                <a href="/betting/sports/filter/motorsports">
                                  Motorsports &gt;&gt;
                                </a>
                              </h4>

                              <ul>
                                <li>
                                  <a href="/betting/sports/filter/motorsports/formula_1">
                                    Formula 1
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/motorsports/speedway">
                                    Speedway
                                  </a>
                                </li>
                                <li>
                                  <a href="/betting/sports/filter/motorsports/supercars">
                                    Supercars
                                  </a>
                                </li>
                              </ul>

                              <div className="row">
                                <div className="column">
                                  <h4>
                                    <a href="/betting/sports/filter/netball">
                                      Netball &gt;&gt;
                                    </a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <a href="/betting/sports/filter/netball/anz_premiership">
                                        ANZ Premiership
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/betting/sports/filter/netball/super_netball">
                                        Super Netball
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="row">
                                <div className="column">
                                  <h4>
                                    <a href="/betting/sports/filter/olympic_games">
                                      Olympic Games
                                    </a>
                                  </h4>
                                </div>
                              </div>

                              <div className="row">
                                <div className="column">
                                  <h4>
                                    <a href="/betting/sports/filter/pesapallo">
                                      Pesapallo
                                    </a>
                                  </h4>
                                </div>
                              </div>

                              <div className="row">
                                <div className="column">
                                  <h4>
                                    <a href="/betting/sports/filter/politics">
                                      Politics
                                    </a>
                                  </h4>
                                </div>
                              </div>

                              <div className="row">
                                <div className="column">
                                  <h4>
                                    <a href="/betting/sports/filter/rugby_league">
                                      Rugby League &gt;&gt;
                                    </a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <a href="/betting/sports/filter/rugby_league/challenge_cup">
                                        Challenge Cup
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/betting/sports/filter/rugby_league/nrl">
                                        NRL
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/betting/sports/filter/rugby_league/state_of_origin">
                                        State of Origin
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/betting/sports/filter/rugby_league/super_league">
                                        Super League
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="row">
                                <div className="column">
                                  <h4>
                                    <a href="/betting/sports/filter/rugby_union">
                                      Rugby Union &gt;&gt;
                                    </a>
                                  </h4>

                                  <ul>
                                    <li>
                                      <a href="/betting/sports/filter/rugby_union/international">
                                        International
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/betting/sports/filter/rugby_union/rugby_world_cup_tournament_bets">
                                        Rugby World Cup Tournament Bets
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/betting/sports/filter/rugby_union/six_nations_championship">
                                        Six Nations Championship
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/betting/sports/filter/rugby_union/super_rugby">
                                        Super Rugby
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/betting/sports/filter/rugby_union/the_rugby_championship">
                                        The Rugby Championship
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/betting/sports/filter/rugby_union/world_rugby_under_20_championship">
                                        World Rugby Under 20 Championship
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p>&nbsp;</p>

                      <p>&nbsp;</p>

                      <p>&nbsp;</p>

                      <p>&nbsp;</p>

                      <p>&nbsp;</p>

                      <p>&nbsp;</p>

                      <p>&nbsp;</p>

                      <p>&nbsp;</p>

                      <p>&nbsp;</p>

                      <p>&nbsp;</p>

                      <p>&nbsp;</p>

                      <p>&nbsp;</p>

                      <p>&nbsp;</p>

                      <p>&nbsp;</p>

                      <p>&nbsp;</p>
                    </div>
                  </div>
                </article>
              </article>
            </div>

            <div className="size1of2">
              <article className="article text-element">
                <pre>
                  <a href="/betting/sports/filter/snooker">Snooker &gt;&gt;</a>
                </pre>

                <div className="row">
                  <div className="column">
                    <div className="row">
                      <div className="column">
                        <ul>
                          <li>
                            <a href="/betting/sports/filter/snooker/world_championship">
                              World Championship
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="column">
                        <h4>
                          <a href="/betting/sports/filter/surfing">
                            Surfing &gt;&gt;
                          </a>
                        </h4>

                        <ul>
                          <li>
                            <a href="/betting/sports/filter/surfing/wsl_mens_championship_tour">
                              WSL Mens Championship Tour
                            </a>
                          </li>
                          <li>
                            <a href="/betting/sports/filter/surfing/wsl_womens_championship_tour">
                              WSL Womens Championship Tour
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="column">
                        <h4>
                          <a href="/betting/sports/filter/tv___novelty">
                            TV &amp; Novelty
                          </a>
                        </h4>
                      </div>
                    </div>

                    <div className="row">
                      <div className="column">
                        <h4>
                          <a href="/betting/sports/filter/trotting">Trotting</a>
                        </h4>
                      </div>
                    </div>

                    <div className="row">
                      <div className="column">
                        <h4>
                          <a href="/betting/sports/filter/ufc_mma">
                            UFC / MMA &gt;&gt;
                          </a>
                        </h4>

                        <ul>
                          <li>
                            <a href="/betting/sports/filter/ufc_mma/ufc">UFC</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="column">
                        <h4>
                          <a href="/betting/sports/filter/unibet_featured">
                            Unibet Featured &gt;&gt;
                          </a>
                        </h4>

                        <ul>
                          <li>
                            <a href="/betting/sports/filter/unibet_featured/world_cup_boosts">
                              World Cup Boosts
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="column">
                        <h4>
                          <a href="/betting/sports/filter/volleyball">
                            Volleyball &gt;&gt;
                          </a>
                        </h4>

                        <ul>
                          <li>
                            <a href="/betting/sports/filter/volleyball/european_league">
                              European League
                            </a>
                          </li>
                          <li>
                            <a href="/betting/sports/filter/volleyball/european_league__w_">
                              European League (W)
                            </a>
                          </li>
                          <li>
                            <a href="/betting/sports/filter/volleyball/international_tournaments">
                              International Tournaments
                            </a>
                          </li>
                          <li>
                            <a href="/betting/sports/filter/volleyball/international_tournaments__w_">
                              International Tournaments (W)
                            </a>
                          </li>
                          <li>
                            <a href="/betting/sports/filter/volleyball/nations_league">
                              National League
                            </a>
                          </li>
                          <li>
                            <a href="/betting/sports/filter/volleyball/nations_league__w_">
                              National League (W)
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="column">
                        <h4>
                          <a href="/betting/sports/filter/wwe_pro_wrestling">
                            WWE/Pro Wrestling &gt;&gt;
                          </a>
                        </h4>

                        <ul>
                          <li>
                            <a href="/betting/sports/filter/wwe_pro_wrestling/money_in_the_bank">
                              Money in the Bank
                            </a>
                          </li>
                          <li>
                            <a href="/betting/sports/filter/wwe_pro_wrestling/royal_rumble">
                              Royal Rumble
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="column">
                        <h4>
                          <a href="/betting/sports/filter/water_polo">
                            Water Polo &gt;&gt;
                          </a>
                        </h4>

                        <ul>
                          <li>
                            <a href="/betting/sports/filter/water_polo/champions_league">
                              Champions League
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="column">
                        <h4>
                          <a href="/betting/sports/filter/winter_olympic_games">
                            Winter Olympics Games
                          </a>
                        </h4>
                      </div>
                    </div>

                    <div className="row">
                      <div className="column">
                        <h4>
                          <a href="/betting/sports/filter/winter_sports">
                            Winter Sports &gt;&gt;
                          </a>
                        </h4>

                        <ul>
                          <li>
                            <a href="/betting/sports/filter/winter_sports/alpine_skiing">
                              Alpine Skiing
                            </a>
                          </li>
                          <li>
                            <a href="/betting/sports/filter/winter_sports/biathlon">
                              Biathlon
                            </a>
                          </li>
                          <li>
                            <a href="/betting/sports/filter/winter_sports/cross-country">
                              Cross-Country
                            </a>
                          </li>
                          <li>
                            <a href="/betting/sports/filter/winter_sports/ski_jumping">
                              Ski Jumping
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="column">
                        <h4>
                          <a href="/betting/sports/filter/all/all/all/all/in-play">
                            Live Betting
                          </a>
                        </h4>

                        <p>
                          <a href="https://www.unibet.co.uk/betting/sports/filter/all/all/all/all/streaming">
                            Live Streaming
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="column">
                        <h2>
                          <a href="/casino">Online Casino</a>
                        </h2>
                      </div>
                    </div>

                    <div className="row">
                      <div className="column">
                        <ul>
                          <li>
                            <a href="/casino/tournaments#6819">
                              Casino Tournament
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/casino/jackpots">
                              Jackpots
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/casino/exclusives">
                              Exclusives
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/casino/unibetpicks">
                              Unibet Picks
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/casino/megaways">
                              Megaways
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/casino/providers">
                              Providers
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/casino/slingo">
                              Slingo
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/casino/vegasslots">
                              Vegas Slots
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/casino/allslots">
                              Slots
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/casino/tablegames">
                              Table Games
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/casino/allgames">
                              All Games
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="column">
                        <h2>
                          <a href="/livecasino">Live Casino</a>
                        </h2>
                      </div>
                    </div>

                    <div className="row">
                      <ul>
                        <li className="column">
                          <a href="https://www.unibet.co.uk/livecasino/foryou">
                            For you
                          </a>
                        </li>
                        <li className="column">
                          <a href="https://www.unibet.co.uk/livecasino/new-games">
                            New Games
                          </a>
                        </li>
                        <li className="column">
                          <a href="https://www.unibet.co.uk/livecasino/exclusives">
                            Exclusives
                          </a>
                        </li>
                        <li className="column">
                          <a href="https://www.unibet.co.uk/livecasino/roulette">
                            Roulette
                          </a>
                        </li>
                        <li className="column">
                          <a href="https://www.unibet.co.uk/livecasino/blackjack">
                            Blackjack
                          </a>
                        </li>
                        <li className="column">
                          <a href="https://www.unibet.co.uk/livecasino/high-stakes">
                            High Stakes
                          </a>
                        </li>
                        <li className="column">
                          <a href="https://www.unibet.co.uk/livecasino/gameshows">
                            Game Shows
                          </a>
                        </li>
                        <li className="column">
                          <a href="https://www.unibet.co.uk/livecasino/baccarat">
                            Baccarat
                          </a>
                        </li>
                        <li className="column">
                          <a href="https://www.unibet.co.uk/livecasino/poker">
                            Live Poker
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="row">
                      <div className="column">
                        <h4>
                          <a href="/bingo">Bingo</a>
                        </h4>

                        <ul>
                          <li>
                            <a href="/bingo/tournaments#6938">
                              Bingo Tournaments
                            </a>
                          </li>
                          <li>
                            <a href="/bingo/bingo-wheel">Bingo Wheel</a>
                          </li>
                          <li>
                            <a href="/bingo/jackpots">Jackpots</a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/bingo/guides">
                              Bingo Guides
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="column">
                        <h2>
                          <a href="/poker">Poker</a>
                        </h2>

                        <ul>
                          <li>
                            <a href="https://www.unibet.co.uk/poker/guides">
                              Poker Guides
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/poker/tournaments">
                              Poker Tournaments
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/poker/unibet-open">
                              Poker Live Events
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/poker/leaderboards">
                              Poker Leaderboards
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/poker/the-chiprace">
                              The ChipRace
                            </a>
                          </li>
                        </ul>

                        <h4>
                          <a href="https://www.unibet.co.uk/stan-james">
                            Stan James
                          </a>
                        </h4>

                        <ul>
                          <li>
                            <a href="https://www.unibet.co.uk/stan-james/casino">
                              Stan James Casino
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/stan-james/betting">
                              Stan James Betting
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/stan-james/login">
                              Stan James Login
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="column">
                        <h2>
                          <a href="/apps">Apps</a>
                        </h2>

                        <ul>
                          <li>
                            <a href="https://www.unibet.co.uk/apps/betting">
                              Unibet Sports Betting App
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/apps/casino">
                              Unibet&nbsp;Casino App
                            </a>
                          </li>
                          <li>
                            <a href="/apps/poker">Unibet&nbsp;Poker App</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="column">
                        <h2>
                          <a href="/promotions">Promotions</a>
                        </h2>

                        <ul>
                          <li>
                            <a href="/promotions/sportsbook-promotions">
                              Sports Promotions
                            </a>
                          </li>
                          <li>
                            <a href="/promotions/casino-promotions">
                              Casino Promotions
                            </a>
                          </li>
                          <li>
                            <a href="/promotions/bingo-promotions">
                              Bingo Promotions
                            </a>
                          </li>
                          <li>
                            <a href="/promotions/poker-promotions">
                              Poker Promotions
                            </a>
                          </li>
                          <li>
                            <a href="/promotions/raf">Refer a Friend</a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/promotions/sportsbook-promotions/betbuilder-uniboost">
                              Bet Builder
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="column">
                        <h2>
                          <a href="https://www.unibet.co.uk/blog">
                            Unibet Blog
                          </a>
                        </h2>

                        <h4>
                          <a href="http://www.unibet.co.uk/blog/football">
                            Football&gt;&gt;
                          </a>
                        </h4>

                        <ul>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/football/premier-league">
                              Premier League
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/football/la-liga/">
                              La Liga
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/football/serie-a/">
                              Serie A
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/football/bundesliga/">
                              Bundesliga
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/football/ligue-1/">
                              Ligue 1
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/football/eredivisie/">
                              Eredivisie
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/football/championship/">
                              Championship
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/football/football-league/">
                              Football League
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/football/champions-league/">
                              Champions League
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/football/europa-league/">
                              Europa League
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/football/african-nations-cup/">
                              African Nations Cup
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/football/league-cup/">
                              League Cup
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/football/football-manager/">
                              Football Manager
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/football/international-football/">
                              International Football
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/football/scottish-football/">
                              Scottish Football
                            </a>
                          </li>
                        </ul>

                        <p>
                          <a href="https://www.unibet.co.uk/blog/horse-racing/">
                            Horse Racing
                          </a>
                          &nbsp;
                        </p>

                        <ul>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/horse-racing/watch-richard-hannon-stable-tour-2023/">
                              Richard Hannon Stable Tour 2023
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/horse-racing/steve-jones-my-cheltenham-festival-2024-yankee/">
                              Steve Jones: My Cheltenham Festival 2024 Yankee
                            </a>
                          </li>
                        </ul>

                        <h4>
                          <a href="https://www.unibet.co.uk/blog/tennis">
                            Tennis
                          </a>
                        </h4>

                        <ul>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/tennis/atp/">
                              ATP
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/tennis/wta/">
                              WTA
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/tennis/australian-open/">
                              Australian Open
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/tennis/davis-cup/">
                              Davis Cup
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/tennis/french-open/">
                              French Open
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/tennis/us-open/">
                              US Open
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/tennis/wimbledon/">
                              Wimbledon
                            </a>
                          </li>
                        </ul>

                        <h4>
                          <a href="https://www.unibet.co.uk/blog/golf">Golf</a>
                        </h4>

                        <ul>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/golf/pga-tour/">
                              PGA Tour
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/golf/european-tour/">
                              European Tour
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/golf/pga-championship/">
                              PGA Championship
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/golf/the-masters/">
                              The Masters
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/golf/the-open/">
                              The Open
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/golf/ryder-cup/">
                              Ryder Cup
                            </a>
                          </li>
                        </ul>

                        <h4>
                          <a href="https://www.unibet.co.uk/blog/darts">
                            Darts
                          </a>
                        </h4>

                        <ul>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/darts/pdc/">
                              PDC
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/darts/bdo/">
                              BDO
                            </a>
                          </li>
                        </ul>

                        <h4>
                          <a href="https://www.unibet.co.uk/blog/formula-1">
                            Formula 1
                          </a>
                        </h4>

                        <h4>US Sports</h4>

                        <ul>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/us-sports/nfl/">
                              NFL
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/us-sports/nba/">
                              NBA
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/us-sports/mlb/">
                              MLB
                            </a>
                          </li>
                        </ul>

                        <h4>More Sports</h4>

                        <ul>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/more-sports/boxing/">
                              Boxing
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/more-sports/mma/">
                              MMA
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/more-sports/cricket/">
                              Cricket
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/more-sports/rugby/">
                              Rugby
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/more-sports/cycling/">
                              Cycling
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/more-sports/snooker/">
                              Snooker
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/blog/more-sports/athletics/">
                              Athletics
                            </a>
                          </li>
                        </ul>

                        <h4>
                          <a href="https://ca.unibet.com">Unibet Canada</a>
                        </h4>

                        <h4>
                          <a href="https://nj.unibet.com">Unibet New Jersey</a>
                        </h4>

                        <h3>
                          <a href="https://www.unibet.co.uk/play/rainbow-riches-nyx">
                            Rainbow Riches
                          </a>
                        </h3>

                        <ul>
                          <li>
                            <a href="https://www.unibet.co.uk/play/rainbow-riches-free-spins-nyx">
                              Rainbow Riches Free Spins
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/play/slingo-rainbow-riches">
                              Slingo Rainbow Riches
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/play/rainbow-riches-pick-n-mix-nyx">
                              Rainbow Riches Pick n Mix
                            </a>
                          </li>
                          <li>
                            <a href="https://www.unibet.co.uk/play/rainbow-riches-power-mix">
                              Rainbow Riches Power Mix
                            </a>
                          </li>
                        </ul>

                        <p>&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
