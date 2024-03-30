using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace EmergentSoftwareChallenge.Server.Controllers
{

    [ApiController]
    [EnableCors]
    [Route("api/[controller]")]
    public class VersionController : ControllerBase
    {
        public class SoftwareVersion
        {
            public required string Name { get; set; }
            public required string Version { get; set; }

        }

        private readonly List<SoftwareVersion> VersionsList = new List<SoftwareVersion>
        {
            new SoftwareVersion { Name = "Visual Studio", Version="2017.1.0.3"  },
            new SoftwareVersion { Name = "Visual Studio", Version="2022.2.1.0"  },
            new SoftwareVersion { Name = "Visual Studio Code", Version="5.3.2.1"  },
            new SoftwareVersion { Name = "MicroSoft Office", Version="2019.3.4.1"  },
            new SoftwareVersion { Name = "Photoshop", Version="20.5.2.1"  },
            new SoftwareVersion { Name = "Angular", Version="17.4.2.1"  },
            new SoftwareVersion { Name = "React", Version="9.4.2.1"  },
        };


        [HttpGet]
        [Route("search")]
        [EnableCors("AllowOrigin")]
        public IActionResult GetSoftwareVersions(string searchVersion)
        {
            if (string.IsNullOrEmpty(searchVersion))
            {
                return BadRequest("Search version cannot be empty");
            }

            var searchVersionArray = searchVersion.Split('.').Select(int.Parse).ToArray();

            var matchingVersions = VersionsList
                .Where(v => IsVersionGreaterThan(v.Version, searchVersionArray))
                .OrderBy(v => v.Version)
                .ToArray();

            return Ok(matchingVersions);
        }

        private bool IsVersionGreaterThan(string version, int[] searchVersion)
        {
            var versionArray = version.Split('.').Select(int.Parse).ToArray();

            for (int i = 0; i < Math.Min(versionArray.Length, searchVersion.Length); i++)
            {
                if (versionArray[i] > searchVersion[i])
                {
                    return true;
                }
                else if (versionArray[i] < searchVersion[i])
                {
                    return false;
                }
            }

            return versionArray.Length > searchVersion.Length;
        }

        [HttpGet]
        [Route("getBaseUrl")]
        public string getBaseUrl() {
           
            return string.Format("{0}://{1}{2}", Request.Scheme, Request.Host, Request.PathBase);
        
        }

    }







}
