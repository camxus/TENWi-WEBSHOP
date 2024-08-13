import axios, { AxiosRequestHeaders } from "axios";

const MAILCHIMP_API_BASE_URL = "https://us18.api.mailchimp.com/3.0";
const LIST_ID = "2d31c29b68";

const getAuthHeader = (req: {
  method?: string;
  body?: any;
  headers?: any;
}) => ({
  Authorization: req.headers.authorization,
});

const fetchListMembers = async (
  authHeader: AxiosRequestHeaders | undefined
) => {
  const response = await axios.get(
    `${MAILCHIMP_API_BASE_URL}/lists/${LIST_ID}/members`,
    { headers: { "Content-Type": "application/json", ...authHeader } }
  );
  return response.data.members;
};

const updateMember = async (
  memberId: any,
  updatedData: any,
  authHeader: AxiosRequestHeaders | undefined
) => {
  const response = await axios.put(
    `${MAILCHIMP_API_BASE_URL}/lists/${LIST_ID}/members/${memberId}?skip_merge_validation=false`,
    updatedData,
    { headers: { "Content-Type": "application/json", ...authHeader } }
  );
  if (response.status !== 200) {
    throw new Error("Network response was not ok");
  }
  return response.data;
};

const addMember = async (
  newMember: any,
  authHeader: AxiosRequestHeaders | undefined
) => {
  const response = await axios.post(
    `${MAILCHIMP_API_BASE_URL}/lists/${LIST_ID}/members?skip_merge_validation=false`,
    newMember,
    { headers: { "Content-Type": "application/json", ...authHeader } }
  );
  if (response.status !== 200) {
    throw new Error("Network response was not ok");
  }
  return response.data;
};

export default async function handler(
  req: { method: string; body: any },
  res: {
    status: (
      arg0: number
    ) => {
      (): any;
      new (): any;
      json: { (arg0: { error: any }): any; new (): any };
    };
  }
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const newValue = req.body; // Since Next.js automatically parses JSON
    const authHeader = getAuthHeader(req);

    const members = await fetchListMembers(authHeader);
    const foundMember = members.find(
      (member: { email_address: any }) =>
        member.email_address === newValue["email_address"]
    );

    const responseData = foundMember
      ? await updateMember(
          foundMember.id,
          { ...foundMember, tags: [...foundMember.tags, newValue.tags] },
          authHeader
        )
      : await addMember(newValue, authHeader);

    return res.status(200).json(responseData);
  } catch (error: any) {
    console.error("There was a problem with the fetch operation:", error);
    return res.status(500).json({ error: error.message });
  }
}
