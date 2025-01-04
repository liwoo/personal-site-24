import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { ArrowRight, FileCheck, Clock, Shield } from 'lucide-react';

const TenderWinnerCallout = () => {
  
  const openLink = (link) => {
    window.open(link, '_blank');
  }
  
  return (
    <Card className="my-8 bg-gradient-to-br from-blue-100 to-indigo-200 border-2 border-blue-100">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2 text-2xl font-bold text-blue-900">
          <Shield className="w-8 h-8 text-blue-600" />
          Ready to win more tenders?
        </div>
        <p className="text-blue-700">Transform weeks of proposal writing into a 30-minute sprint</p>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-start gap-2">
            <Clock className="w-5 h-5 mt-1 text-blue-600" />
            <div>
              <p className="font-semibold text-2xl text-blue-900">Quick Setup</p>
              <p className="text-sm text-blue-700">Profile, CVs & docs in a flash ⚡️</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <FileCheck className="w-5 h-5 mt-1 text-blue-600" />
            <div>
              <p className="font-semibold text-2xl text-blue-900">Pro Templates</p>
              <p className="text-sm text-blue-700">EU, World Bank, PPC, ++</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Shield className="w-5 h-5 mt-1 text-blue-600" />
            <div>
              <p className="font-semibold text-2xl text-blue-900">💯 Compliance</p>
              <p className="text-sm text-blue-700">AI-powered accuracy check</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6"
          onClick={() => openLink('https://calendly.com/jeremiahchienda/tender-winner')}
        >
          Request Demo
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TenderWinnerCallout;
